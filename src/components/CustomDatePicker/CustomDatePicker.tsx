import { format, getDate, getMonth, isEqual, isToday } from 'date-fns';
import React, { FC, useCallback, useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ArrowLeftIcon } from './../../assets/icons/ArrowLeftIcon';
import {
  DAY,
  ISOToDate,
  MONTH_WITH_YEAR,
  WEEKDAYS,
  dateToISO,
  genDaysOfTheWeek,
} from '../../utils/date';
import { addAlpha } from '../../utils/indexUtils';

interface CalendarProps {
  selectDate: string;
  onSelectDate(date: string): void;
}

export const HIT_SLOP = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
};

export const CustomDatePicker: FC<CalendarProps> = ({ selectDate, onSelectDate }) => {

  const currentDate = useMemo(() => {
    const date = ISOToDate(selectDate);
    date.setHours(0, 0, 0, 0);
    return date;
  }, [selectDate]);

  const days = useMemo(
    () => genDaysOfTheWeek(ISOToDate(selectDate)),
    [selectDate],
  );

  const onNextPress = useCallback(() => {
    currentDate.setTime(currentDate.getTime() + DAY * 7);
    onSelectDate(currentDate.toISOString());
  }, [currentDate, onSelectDate]);

  const onPrevPress = useCallback(() => {
    currentDate.setTime(currentDate.getTime() - DAY * 7);
    onSelectDate(currentDate.toISOString());
  }, [currentDate, onSelectDate]);

  return (
    <View style={styles.container}>
      <Header
        onNextPress={onNextPress}
        onPrevPress={onPrevPress}
        selectDate={selectDate}
      />
      <DayList
        days={days}
        selectDate={selectDate}
        onSelectDate={onSelectDate}
      />
    </View>
  );
};

const DayList = ({
  days,
  selectDate,
  onSelectDate,
}: { days: Date[] } & CalendarProps) => {
  return (
    <View style={styles.dayList}>
      {days.map((day, key) => (
        <Day
          day={day}
          key={key.toString()}
          selectDate={selectDate}
          onSelectDate={onSelectDate}
          index={key}
        />
      ))}
    </View>
  );
};

const Day = ({
  day,
  selectDate,
  onSelectDate,
}: { day: Date; index: number } & CalendarProps) => {
  const dayIndex = useMemo(() => (day.getDay() - 1 + 7) % 7, [day]);

  const isSelected = isEqual(getDate(selectDate), getDate(day));
  const key = useMemo(() => day.toISOString(), [day]);
  return (
    <View style={styles.dayListItem} key={key}>
      <Text style={[styles.selectDate, styles.weekName]}>
        {WEEKDAYS[dayIndex]}
      </Text>
      <View >
        <TouchableOpacity
          hitSlop={HIT_SLOP}
          onPress={() => onSelectDate(dateToISO(day))}
          style={[
            styles.noActiveDate,
            isSelected && styles.activeDate,
            isToday(day) && styles.today,
            !(getMonth(day) === getMonth(selectDate)) && styles.disabledDate,
          ]}>
          <Text style={[styles.day, isSelected && styles.activeDay]}>
            {day.getDate()}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Header = ({
  onNextPress,
  onPrevPress,
  selectDate,
}: {
  onNextPress: () => void;
  onPrevPress: () => void;
  selectDate: string;
}) => {
  const key = useMemo(() => format(selectDate, MONTH_WITH_YEAR), [selectDate]);
  return (
    <View style={styles.header}>
      <View style={[styles.flexRow, styles.arrowButtonGroup]}>
        <ArrowLeftIcon onPress={onPrevPress} />
      </View>
      <View>
        <View key={key}>
          <Text style={styles.date}>{format(selectDate, MONTH_WITH_YEAR)}</Text>
        </View>
      </View>
      <View style={[styles.flexRow, styles.arrowButtonGroup]}>
        <ArrowLeftIcon style={styles.arrowRightIcon} onPress={onNextPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10
  },
  header: {
    paddingLeft: 20,
    paddingRight: 10,
    paddingVertical: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  date: {
    fontSize: 18,
    color: "#000",
    fontWeight: "600",
  },
  selectDate: {
    fontSize: 12,
    color: addAlpha("#fff", 0.6),
  },
  selectDataBold: {
    fontSize: 12,
    color: "#fff",
  },
  flexRow: {
    flexDirection: 'row',
  },
  arrowButtonGroup: {
    columnGap: 8,
  },
  arrowRightIcon: {
    transform: [
      {
        rotate: '180deg',
      },
      {
        translateY: 2,
      },
    ],
  },
  dayList: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 12,
    paddingHorizontal: 9,
    borderRadius: 16,
    marginHorizontal: 8,
    overflow: 'hidden',
  },
  dayListItem: {
    flex: 1,
    alignItems: 'center',
  },
  weekName: {
    color: "#9CA3AF",
    paddingBottom: 3,
    fontWeight: "400",
    fontSize: 16
  },
  day: {
    fontSize: 16,
    color: "#000",
  },
  noActiveDate: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'transparent',
    marginTop: 12,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  disabledDate: {
    opacity: 0.6,
  },
  activeDate: {
    backgroundColor: "#000",
    borderColor: "#000",
  },
  today: {
    borderColor: "#000",
  },
  activeDay: {
    color: "#fff",
  },
});
