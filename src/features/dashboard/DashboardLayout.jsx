import styled from 'styled-components';
import Spinner from '../../ui/Spinner';
import { useRecentBookings } from './useRecentBookings';
import { useRecentStays } from './useRecentStays';
import {useCabins} from '../cabins/useCabins';
import Stats from './Stats';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading1, bookings } = useRecentBookings();
  const { isLoading2, stays, confirmedStays, numDays } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins()

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  // console.log(bookings);
  console.log(stays, confirmedStays);
  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings} confirmedStays={confirmedStays} numDays={numDays} cabinCount={cabins.length} />
      <div>Today's activity</div>
      <div>Chart stay durations</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
