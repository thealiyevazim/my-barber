import { TimelineEventProps, CalendarUtils } from 'react-native-calendars';
import { colors } from './colors';

const EVENT_COLOR = colors.appBlack;
const today = new Date();
export const getDate = (offset = 0) =>
  CalendarUtils.getCalendarDateString(
    new Date().setDate(today.getDate() + offset),
  );

export const timelineEvents: TimelineEventProps[] = [
  {
    start: `${getDate()} 10:00:00`,
    end: `${getDate()} 11:00:00`,
    title: 'Akbarali Mallayev',
    summary: 'Soqol kesish',
    color: colors.lightGray,
  },
  {
    start: `${getDate()} 12:00:00`,
    end: `${getDate()} 13:00:00`,
    title: 'Ozod Norbekov',
    summary: 'Soch turmaklash',
    color: EVENT_COLOR,
  },
  {
    start: `${getDate()} 13:00:00`,
    end: `${getDate()} 14:00:00`,
    title: 'Nodir Aliyev',
    summary: 'Soqol kesish',
    color: EVENT_COLOR,
  },
  {
    start: `${getDate()} 14:00:00`,
    end: `${getDate()} 15:00:00`,
    title: 'Mansur Sobirbekov',
    summary: 'Soch kesish',
    color: EVENT_COLOR,
  },
];
