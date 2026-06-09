import { View } from 'react-native';

import { StaffCard } from '@/components/cards/StaffCard';
import { Staff } from '@/types';

interface StaffListProps {
  staff: Staff[];
  onSelect?: (staff: Staff) => void;
}

export function StaffList({ staff, onSelect }: StaffListProps) {
  return (
    <View>
      {staff.map((member) => (
        <StaffCard key={member.id} staff={member} onPress={() => onSelect?.(member)} />
      ))}
    </View>
  );
}
