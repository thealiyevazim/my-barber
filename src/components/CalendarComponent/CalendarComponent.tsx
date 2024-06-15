import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { filter, find, groupBy } from 'lodash';
import { CalendarProvider, CalendarUtils, ExpandableCalendar, TimelineEventProps, TimelineList, TimelineProps } from 'react-native-calendars';
import { getDate, timelineEvents } from '~utils';
import RightIcon from "~assets/images/arrow-right.png";
import LeftIcon from "~assets/images/arrow-left.png";

const INITIAL_TIME = { hour: 9, minutes: 0 };

const EVENTS: TimelineEventProps[] = timelineEvents;

export const CalendarComponent: React.FC = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [eventsByDate, setEventsByDate] = useState<{
    [key: string]: any[]
  }>(groupBy(EVENTS, e => CalendarUtils.getCalendarDateString(e.start)) as {
    [key: string]: TimelineEventProps[];
  });

  const onDateChanged = (date: string, source: string) => {
    console.log('TimelineCalendarScreen onDateChanged: ', date, source);
    setCurrentDate(date)
  };

  const onMonthChange = (month: any, updateSource: any) => {
    console.log('TimelineCalendarScreen onMonthChange: ', month, updateSource);
  };

  const marked = {
    [`${getDate()}`]: { marked: true },
    [`${getDate(1)}`]: { marked: true },
    [`${getDate(2)}`]: { marked: true },
    [`${getDate(3)}`]: { marked: true },
    [`${getDate(4)}`]: { marked: true },
  };


  const createNewEvent: TimelineProps['onBackgroundLongPress'] = (timeString, timeObject) => {
    const hourString = `${(timeObject.hour + 1).toString().padStart(2, '0')}`;
    const minutesString = `${timeObject.minutes.toString().padStart(2, '0')}`;

    const newEvent = {
      id: 'draft',
      start: `${timeString}`,
      end: `${timeObject.date} ${hourString}:${minutesString}:00`,
      title: 'New Event',
      color: 'white',
    };

    if (timeObject.date) {
      const updatedEventsByDate = { ...eventsByDate };

      if (eventsByDate[timeObject.date]) {
        updatedEventsByDate[timeObject.date] = [...eventsByDate[timeObject.date], newEvent];
      } else {
        updatedEventsByDate[timeObject.date] = [newEvent];
      }
      setEventsByDate(updatedEventsByDate);
    }
  };

  const approveNewEvent: TimelineProps['onBackgroundLongPressOut'] = (_timeString, timeObject) => {
    Alert.prompt('New Event', 'Enter event title', [
      {
        text: 'Cancel',
        onPress: () => {
          if (timeObject.date) {
            const updatedEvents = {
              ...eventsByDate,
              [timeObject.date]: filter(eventsByDate[timeObject.date], e => e.id !== 'draft')
            };
            setEventsByDate(updatedEvents);
          }
        }
      },
      {
        text: 'Create',
        onPress: eventTitle => {
          if (timeObject.date) {
            const draftEvent = find(eventsByDate[timeObject.date], { id: 'draft' });
            if (draftEvent) {
              draftEvent.id = undefined;
              draftEvent.title = eventTitle ?? 'New Event';
              draftEvent.color = 'lightgreen';
              const updatedEvents = {
                ...eventsByDate,
                [timeObject.date]: [...eventsByDate[timeObject.date]]
              };
              setEventsByDate(updatedEvents);
            }
          }
        }
      }
    ]);
  };

  const timelineProps: Partial<TimelineProps> = {
    format24h: true,
    onBackgroundLongPress: createNewEvent,
    onBackgroundLongPressOut: approveNewEvent,
    // scrollToFirst: true,
    // start: 0,
    // end: 24,
    unavailableHours: [{ start: 0, end: 6 }, { start: 22, end: 24 }],
    overlapEventsSpacing: 8,
    rightEdgeSpacing: 24,
    onEventPress: () => Alert.alert("rrrrrrr"),
    styles: {
      textDayStyle: {
        color: "red"
      }
    }
  };

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;

  return (
    <CalendarProvider
      date={`${currentYear}-${currentMonth}`}
      onDateChanged={onDateChanged}
      onMonthChange={onMonthChange}
      showTodayButton
      disabledOpacity={0.6}
      // numberOfDays={3}
      style={styles.container}
    >
      <ExpandableCalendar
        firstDay={1}
        leftArrowImageSource={LeftIcon}
        rightArrowImageSource={RightIcon}
        markedDates={marked}
      />
      <TimelineList
        events={eventsByDate}
        timelineProps={timelineProps}
        showNowIndicator
        scrollToNow
        scrollToFirst
        initialTime={INITIAL_TIME}
      />
    </CalendarProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  }
})