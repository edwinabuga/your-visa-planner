export interface EligibilityFormData {
  // Step 1: Name
  firstName: string;
  secondName: string;

  // Step 2: Travel Details
  purposeOfVisit: string;
  purposeOther: string;
  travelDate: string;
  stayDuration: string;

  // Step 3: Employment & Income
  employmentStatus: string;
  jobDuration: string;
  businessDuration: string;
  monthlyIncome: string;

  // Step 4: Financial Position
  bankBalance: string;
  bankStatements: string;
  financialTies: string[];

  // Step 5: Personal Ties
  maritalStatus: string;
  tiesToKenya: string[];

  // Step 6: Travel History
  previousUkVisa: string;
  timesRefused: string;
  lastRefusalDate: string;
  internationalTravel: string;

  // Step 7: Contact
  email: string;
  phone: string;
  disclaimerAccepted: boolean;
}

export interface FormApiResponse {
  success: boolean;
  message: string;
}
