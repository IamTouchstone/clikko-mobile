import { AppTextInput } from '@/components/common/AppTextInput';

interface StaffSearchBarProps {
  value: string;
  onChangeText: (value: string) => void;
}

export function StaffSearchBar({ value, onChangeText }: StaffSearchBarProps) {
  return <AppTextInput placeholder="Search staff" value={value} onChangeText={onChangeText} />;
}
