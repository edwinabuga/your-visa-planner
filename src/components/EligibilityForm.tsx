"use client";

import { useState } from "react";
import {
  Loader2,
  CheckCircle,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import type { EligibilityFormData, FormApiResponse } from "@/lib/types";

const TOTAL_STEPS = 7;

const inputClass =
  "w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none";
const labelClass = "block text-sm font-medium text-neutral-700 mb-1";
const radioGroupClass = "flex flex-col gap-2.5 mt-1.5";
const radioLabelClass =
  "flex items-center gap-2.5 text-sm text-neutral-700 cursor-pointer rounded-lg border border-neutral-200 px-4 py-3 hover:border-primary/40 has-[:checked]:border-primary has-[:checked]:bg-primary-light transition-colors";
const checkboxLabelClass =
  "flex items-center gap-2.5 text-sm text-neutral-700 cursor-pointer rounded-lg border border-neutral-200 px-4 py-3 hover:border-primary/40 has-[:checked]:border-primary has-[:checked]:bg-primary-light transition-colors";

const emptyFormData: EligibilityFormData = {
  firstName: "",
  secondName: "",
  purposeOfVisit: "",
  purposeOther: "",
  travelDate: "",
  stayDurationAmount: "",
  stayDurationUnit: "Weeks",
  employmentStatus: "",
  jobDuration: "",
  businessDuration: "",
  monthlyIncome: "",
  bankBalance: "",
  bankStatements: "",
  financialTies: [],
  maritalStatus: "",
  tiesToKenya: [],
  previousUkVisa: "",
  timesRefused: "",
  lastRefusalDate: "",
  internationalTravel: "",
  email: "",
  phone: "",
  disclaimerAccepted: false,
};

type FormStatus = "filling" | "submitting" | "submitted" | "error";

export default function EligibilityForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<FormStatus>("filling");
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState<EligibilityFormData>(emptyFormData);

  function update(fields: Partial<EligibilityFormData>) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  function toggleArrayField(
    field: "financialTies" | "tiesToKenya",
    value: string
  ) {
    setData((prev) => {
      const arr = prev[field];
      return {
        ...prev,
        [field]: arr.includes(value)
          ? arr.filter((v) => v !== value)
          : [...arr, value],
      };
    });
  }

  function canAdvance(): boolean {
    switch (step) {
      case 1:
        return !!data.firstName.trim() && !!data.secondName.trim();
      case 2:
        return (
          !!data.purposeOfVisit &&
          !!data.travelDate &&
          !!data.stayDurationAmount.trim()
        );
      case 3:
        return !!data.employmentStatus;
      case 4:
        return !!data.bankBalance.trim() && !!data.bankStatements;
      case 5:
        return !!data.maritalStatus;
      case 6:
        return !!data.internationalTravel;
      case 7:
        return !!data.phone.trim() && data.disclaimerAccepted;
      default:
        return true;
    }
  }

  function next() {
    if (canAdvance() && step < TOTAL_STEPS) setStep(step + 1);
  }

  function back() {
    if (step > 1) setStep(step - 1);
  }

  async function handleSubmit() {
    if (!canAdvance()) return;
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/eligibility", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result: FormApiResponse = await response.json();

      if (result.success) {
        setStatus("submitted");
      } else {
        setErrorMessage(result.message);
        setStatus("error");
      }
    } catch {
      setErrorMessage(
        "Unable to submit. Please check your connection and try again, or contact us via WhatsApp."
      );
      setStatus("error");
    }
  }

  // ---------- SUCCESS SCREEN ----------
  if (status === "submitted") {
    const whatsappMessage = `Hello! I just completed the eligibility assessment on your website. My name is ${data.firstName} ${data.secondName}. Looking forward to hearing from you!`;
    return (
      <div className="rounded-xl bg-primary-light p-8 sm:p-12 text-center">
        <div className="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-3">
          <CheckCircle size={32} className="text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">
          Assessment Submitted!
        </h2>
        <p className="text-neutral-600 mb-2">
          Thank you, {data.firstName}. We have received your eligibility
          assessment.
        </p>
        <p className="text-sm text-neutral-500 mb-8">
          Edwin will review your details and get back to you within 24 hours.
          For a faster response, continue on WhatsApp.
        </p>
        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          <a
            href={getWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-8 py-3.5 text-base font-semibold text-white hover:bg-[#20bd5a] transition-colors"
          >
            <MessageCircle size={20} />
            Continue on WhatsApp
          </a>
          <a
            href="/"
            className="flex items-center justify-center gap-2 rounded-lg border border-neutral-300 px-8 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
          >
            Back to Homepage
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    );
  }

  // ---------- FORM STEPS ----------
  return (
    <div>
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-xs text-neutral-500 mb-2">
          <span>
            Step {step} of {TOTAL_STEPS}
          </span>
          <span>{Math.round((step / TOTAL_STEPS) * 100)}%</span>
        </div>
        <div className="h-2 rounded-full bg-neutral-200">
          <div
            className="h-2 rounded-full bg-primary transition-all duration-300"
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>
      </div>

      {/* Error banner */}
      {status === "error" && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4 mb-6">
          <p className="text-sm text-red-700">{errorMessage}</p>
        </div>
      )}

      {/* Step content */}
      <div className="min-h-[280px]">
        {step === 1 && (
          <StepWrapper title="Your Name">
            <div className="space-y-4">
              <div>
                <label htmlFor="firstName" className={labelClass}>
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  className={inputClass}
                  placeholder="Your first name"
                  value={data.firstName}
                  onChange={(e) => update({ firstName: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="secondName" className={labelClass}>
                  Second Name *
                </label>
                <input
                  type="text"
                  id="secondName"
                  required
                  className={inputClass}
                  placeholder="Your second name"
                  value={data.secondName}
                  onChange={(e) => update({ secondName: e.target.value })}
                />
              </div>
            </div>
          </StepWrapper>
        )}

        {step === 2 && (
          <StepWrapper title="Travel Details">
            <div className="space-y-4">
              <div>
                <span className={labelClass}>Main purpose of visit *</span>
                <div className={radioGroupClass}>
                  {[
                    "Tourism/Sightseeing",
                    "Visiting family or friends",
                    "Business meetings or conferences",
                    "Other",
                  ].map((opt) => (
                    <label key={opt} className={radioLabelClass}>
                      <input
                        type="radio"
                        name="purposeOfVisit"
                        value={opt}
                        checked={data.purposeOfVisit === opt}
                        onChange={(e) =>
                          update({ purposeOfVisit: e.target.value })
                        }
                        className="accent-primary"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
                {data.purposeOfVisit === "Other" && (
                  <input
                    type="text"
                    className={`${inputClass} mt-3`}
                    placeholder="Please specify"
                    value={data.purposeOther}
                    onChange={(e) => update({ purposeOther: e.target.value })}
                  />
                )}
              </div>
              <div>
                <label htmlFor="travelDate" className={labelClass}>
                  When do you plan to travel? *
                </label>
                <input
                  type="date"
                  id="travelDate"
                  required
                  className={inputClass}
                  value={data.travelDate}
                  onChange={(e) => update({ travelDate: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="stayDurationAmount" className={labelClass}>
                  How long will you stay in the UK? *
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    id="stayDurationAmount"
                    required
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className={`${inputClass} flex-1 min-w-0`}
                    placeholder="e.g. 2"
                    value={data.stayDurationAmount}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "");
                      update({ stayDurationAmount: val });
                    }}
                  />
                  <select
                    id="stayDurationUnit"
                    className={`${inputClass} w-32 bg-white`}
                    value={data.stayDurationUnit}
                    onChange={(e) =>
                      update({ stayDurationUnit: e.target.value })
                    }
                  >
                    <option value="Days">Days</option>
                    <option value="Weeks">Weeks</option>
                    <option value="Months">Months</option>
                  </select>
                </div>
              </div>
            </div>
          </StepWrapper>
        )}

        {step === 3 && (
          <StepWrapper title="Employment & Income">
            <div className="space-y-4">
              <div>
                <span className={labelClass}>
                  Current employment status *
                </span>
                <div className={radioGroupClass}>
                  {[
                    "Employed full-time",
                    "Self-employed/Business owner",
                    "Unemployed/Between jobs",
                    "Student",
                    "Retired",
                  ].map((opt) => (
                    <label key={opt} className={radioLabelClass}>
                      <input
                        type="radio"
                        name="employmentStatus"
                        value={opt}
                        checked={data.employmentStatus === opt}
                        onChange={(e) =>
                          update({ employmentStatus: e.target.value })
                        }
                        className="accent-primary"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              {data.employmentStatus === "Employed full-time" && (
                <div>
                  <label htmlFor="jobDuration" className={labelClass}>
                    How long at your current job?
                  </label>
                  <input
                    type="text"
                    id="jobDuration"
                    className={inputClass}
                    placeholder="e.g. 3 years"
                    value={data.jobDuration}
                    onChange={(e) => update({ jobDuration: e.target.value })}
                  />
                </div>
              )}
              {data.employmentStatus === "Self-employed/Business owner" && (
                <div>
                  <label htmlFor="businessDuration" className={labelClass}>
                    How long has your business been operating?
                  </label>
                  <input
                    type="text"
                    id="businessDuration"
                    className={inputClass}
                    placeholder="e.g. 5 years"
                    value={data.businessDuration}
                    onChange={(e) =>
                      update({ businessDuration: e.target.value })
                    }
                  />
                </div>
              )}
              <div>
                <label htmlFor="monthlyIncome" className={labelClass}>
                  Approximate monthly income (KES)
                </label>
                <input
                  type="text"
                  id="monthlyIncome"
                  inputMode="numeric"
                  className={inputClass}
                  placeholder="e.g. 150,000"
                  value={data.monthlyIncome}
                  onChange={(e) => update({ monthlyIncome: e.target.value })}
                />
              </div>
            </div>
          </StepWrapper>
        )}

        {step === 4 && (
          <StepWrapper title="Financial Position">
            <div className="space-y-4">
              <div>
                <label htmlFor="bankBalance" className={labelClass}>
                  Current bank account balance (KES) *
                </label>
                <input
                  type="text"
                  id="bankBalance"
                  required
                  inputMode="numeric"
                  className={inputClass}
                  placeholder="e.g. 500,000"
                  value={data.bankBalance}
                  onChange={(e) => update({ bankBalance: e.target.value })}
                />
              </div>
              <div>
                <span className={labelClass}>
                  Can you show 6+ months of bank statements? *
                </span>
                <div className={radioGroupClass}>
                  {[
                    "Yes, statements ready",
                    "Yes, need to request from bank",
                    "No / Not sure",
                  ].map((opt) => (
                    <label key={opt} className={radioLabelClass}>
                      <input
                        type="radio"
                        name="bankStatements"
                        value={opt}
                        checked={data.bankStatements === opt}
                        onChange={(e) =>
                          update({ bankStatements: e.target.value })
                        }
                        className="accent-primary"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <span className={labelClass}>
                  Financial ties to Kenya (select all that apply)
                </span>
                <div className="flex flex-col gap-2.5 mt-1.5">
                  {[
                    "Property/Land ownership",
                    "Business ownership",
                    "Regular investment/rental income",
                    "Savings accounts or fixed deposits",
                    "None of the above",
                  ].map((opt) => (
                    <label key={opt} className={checkboxLabelClass}>
                      <input
                        type="checkbox"
                        checked={data.financialTies.includes(opt)}
                        onChange={() => toggleArrayField("financialTies", opt)}
                        className="accent-primary"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </StepWrapper>
        )}

        {step === 5 && (
          <StepWrapper title="Personal Ties to Kenya">
            <div className="space-y-4">
              <div>
                <span className={labelClass}>Marital/family status *</span>
                <div className={radioGroupClass}>
                  {[
                    "Single, no dependents",
                    "Single with children/dependents",
                    "Married/In relationship (partner in Kenya)",
                    "Married/In relationship (partner abroad)",
                  ].map((opt) => (
                    <label key={opt} className={radioLabelClass}>
                      <input
                        type="radio"
                        name="maritalStatus"
                        value={opt}
                        checked={data.maritalStatus === opt}
                        onChange={(e) =>
                          update({ maritalStatus: e.target.value })
                        }
                        className="accent-primary"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <span className={labelClass}>
                  Ties to Kenya (select all that apply)
                </span>
                <div className="flex flex-col gap-2.5 mt-1.5">
                  {[
                    "Employed with job to return to",
                    "Business requiring my presence",
                    "Children in school",
                    "Elderly parents to support/care for",
                    "Property owned or managed",
                    "None of the above",
                  ].map((opt) => (
                    <label key={opt} className={checkboxLabelClass}>
                      <input
                        type="checkbox"
                        checked={data.tiesToKenya.includes(opt)}
                        onChange={() => toggleArrayField("tiesToKenya", opt)}
                        className="accent-primary"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </StepWrapper>
        )}

        {step === 6 && (
          <StepWrapper title="Travel History">
            <div className="space-y-4">
              <div>
                <span className={labelClass}>
                  Have you ever applied for a UK visa before?
                </span>
                <div className={radioGroupClass}>
                  {[
                    "No, this is my first application",
                    "Yes, and it was approved",
                    "Yes, and it was refused",
                  ].map((opt) => (
                    <label key={opt} className={radioLabelClass}>
                      <input
                        type="radio"
                        name="previousUkVisa"
                        value={opt}
                        checked={data.previousUkVisa === opt}
                        onChange={(e) =>
                          update({ previousUkVisa: e.target.value })
                        }
                        className="accent-primary"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              {data.previousUkVisa === "Yes, and it was refused" && (
                <>
                  <div>
                    <span className={labelClass}>
                      How many times were you refused?
                    </span>
                    <div className={radioGroupClass}>
                      {["Once", "2 or more times"].map((opt) => (
                        <label key={opt} className={radioLabelClass}>
                          <input
                            type="radio"
                            name="timesRefused"
                            value={opt}
                            checked={data.timesRefused === opt}
                            onChange={(e) =>
                              update({ timesRefused: e.target.value })
                            }
                            className="accent-primary"
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastRefusalDate" className={labelClass}>
                      When was your last refusal?
                    </label>
                    <input
                      type="text"
                      id="lastRefusalDate"
                      className={inputClass}
                      placeholder="e.g. March 2024"
                      value={data.lastRefusalDate}
                      onChange={(e) =>
                        update({ lastRefusalDate: e.target.value })
                      }
                    />
                  </div>
                </>
              )}
              <div>
                <span className={labelClass}>
                  Have you travelled outside Kenya before? *
                </span>
                <div className={radioGroupClass}>
                  {[
                    "Yes, to multiple countries",
                    "Yes, within East Africa only",
                    "No, this would be my first international trip",
                  ].map((opt) => (
                    <label key={opt} className={radioLabelClass}>
                      <input
                        type="radio"
                        name="internationalTravel"
                        value={opt}
                        checked={data.internationalTravel === opt}
                        onChange={(e) =>
                          update({ internationalTravel: e.target.value })
                        }
                        className="accent-primary"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </StepWrapper>
        )}

        {step === 7 && (
          <StepWrapper title="Contact Details">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  inputMode="email"
                  className={inputClass}
                  placeholder="your@email.com"
                  value={data.email}
                  onChange={(e) => update({ email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  inputMode="tel"
                  className={inputClass}
                  placeholder="+254 7XX XXX XXX"
                  value={data.phone}
                  onChange={(e) => update({ phone: e.target.value })}
                />
              </div>
              <div className="pt-2">
                <label className="flex items-start gap-3 text-sm text-neutral-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={data.disclaimerAccepted}
                    onChange={(e) =>
                      update({ disclaimerAccepted: e.target.checked })
                    }
                    className="accent-primary mt-0.5"
                  />
                  <span>
                    I understand that this is a free eligibility assessment and
                    does not constitute legal advice. My information will be used
                    solely to assess my visa eligibility and contact me with the
                    results.
                  </span>
                </label>
              </div>
            </div>
          </StepWrapper>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        {step > 1 ? (
          <button
            type="button"
            onClick={back}
            className="flex items-center gap-2 rounded-lg border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        ) : (
          <div />
        )}

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={next}
            disabled={!canAdvance()}
            className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <ArrowRight size={16} />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canAdvance() || status === "submitting"}
            className="flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Assessment"
            )}
          </button>
        )}
      </div>
    </div>
  );
}

function StepWrapper({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-neutral-900 mb-5">{title}</h2>
      {children}
    </div>
  );
}
