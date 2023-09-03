import StepOne from '../steps/StepOne';
import Default from '../steps/Default.jsx';
import StepTwo from '../steps/StepTwo';
import PreferredLearningStyle from '../steps/PreferredLearningStyle';
import IndustryDropdown from '../steps/IndustryDropdown';
import FamiliarityRanking from '../steps/FamiliarityRanking';
import InterviewPrepTime from '../steps/InterviewPrepTime';

export const KeysToComponentMap = {
  stepOne: StepOne,
  contactInfo: StepTwo,
  preferredLearningStyle: PreferredLearningStyle,
  industry: IndustryDropdown,
  familiarityRank: FamiliarityRanking,
  interviewPrep: InterviewPrepTime,
  default: Default,
};
