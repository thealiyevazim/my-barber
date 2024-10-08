import React, { useCallback, useRef, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import BarberWelcoming from '~assets/images/barber-welcoming.png';
import BarbershopTeam from '~assets/images/barbershop-team.png';
import BarberWorking from '~assets/images/barbershop-working.png';
import { AppButton } from '../AppButton/AppButton';
import { CircleButon } from '../AppButton/CircleButton';
import { AppText } from '../AppText/AppText';
import { colors } from '~utils';

type Props = {
  onPress: () => void;
};

export const OnboardingPagerView: React.FC<Props> = ({ onPress }) => {
  const pagerRef: React.LegacyRef<PagerView> = useRef(null);
  const [page, setPage] = useState(0);

  const handleNextPage = useCallback(() => {
    pagerRef.current?.setPage(page + 1);
    setPage(prev => prev + 1);
  }, [page]);

  return (
    <PagerView
      ref={pagerRef}
      initialPage={page}
      scrollEnabled={false}
      style={styles.pagerView}>
      <View style={styles.page} key="1">
        <View>
          <Image source={BarbershopTeam} />
          <AppText semibold style={styles.title}>
            Hobby and business
          </AppText>
          <AppText style={styles.description}>
            Your hobby can turn into a profitable business
          </AppText>
        </View>
        <CircleButon style={styles.button} onPress={handleNextPage} />
      </View>
      <View style={styles.page} key="2">
        <View>
          <Image source={BarberWelcoming} />
          <AppText semibold style={styles.title}>
            Skilled masters
          </AppText>
          <AppText style={styles.description}>
            Trust the trusted masters to show yourself off without a doubt
          </AppText>
        </View>
        <CircleButon style={styles.button} onPress={handleNextPage} />
      </View>
      <View style={styles.page} key="3">
        <View>
          <Image source={BarberWorking} />
          <AppText semibold style={styles.title}>
            Hobby and business
          </AppText>
          <AppText style={styles.description}>
            Your hobby can turn into a profitable business
          </AppText>
        </View>
        <AppButton title="Next" onPress={onPress} />
      </View>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: '10%',
  },
  pagerView: {
    flex: 1,
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 20,
    marginTop: 15,
    color: colors.appBlack,
  },
  description: {
    alignSelf: 'flex-start',
    fontSize: 14,
    color: colors.appBlack,
  },
  page: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: { alignSelf: 'flex-end' },
});
