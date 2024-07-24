import { StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';
import React, { useCallback } from 'react';
import { SafeAreaTemplate } from '~templates';
import { AppButton, AppInput, AppText } from '~components';
import { GoBackIcon } from '~assets/icons';
import { colors } from '~utils';
import { AddServiceData, useTypedNavigation } from '~shared';
import { addServices, useAppDispatch, useBarberData, useBarberServices } from '~store';
import { array, number, object, string } from 'yup';
import { FieldArray, Formik } from "formik";
import { FONT_TYPES } from '~assets/fonts/types';

const itemSchema = object().shape({
  name: string().required("Name is required"),
  price: number().required("Price is required").positive("Price must be a positive number"),
});

const validationSchema = object().shape({
  items: array().of(itemSchema).required("At least one item is required"),
});

export const BarberSelectService: React.FC = () => {
  const { goBack } = useTypedNavigation();
  const dispatch = useAppDispatch();
  const barberServices = useBarberServices()

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleSubmitForm = useCallback((data: {
    items: AddServiceData[]
  }) => {
    const body = data.items.map((item) => ({
      ...item,
      price: Number(item.price)
    }))
    dispatch(addServices(body));
    console.log(data.items);
  }, [dispatch]);

  const initialValues = {
    items: (barberServices)?.map((service) => ({
      name: service.name,
      price: service.price
    }))
  }

  return (
    <SafeAreaTemplate>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.7} onPress={handleGoBack}>
          <GoBackIcon style={styles.icon} stroke={colors.appBlack} />
        </TouchableOpacity>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <AppText semibold style={styles.headerTitle}>Services</AppText>
        </View>
      </View>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitForm}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => {
          return (<FieldArray name="items">
            {() => {
              return (
                <View style={styles.container}>
                  <View>
                    {values.items.map((item, index) => (
                      <View key={index} style={styles.serviceItem}>
                        <TextInput
                          style={[styles.serviceText]}
                          value={item.name}
                          editable={false}
                          onChangeText={text => handleChange(`items.${index}.name`)(text)}
                          onBlur={() => handleBlur(`items.${index}.name`)}
                        />
                        <AppInput
                          style={styles.input}
                          placeholder='Price'
                          onChangeText={text => handleChange(`items.${index}.price`)(text)}
                          onBlur={() => handleBlur(`items.${index}.price`)}
                          keyboardType='numeric'
                          value={item.price.toString()}
                        />
                      </View>
                    ))}
                  </View>
                  <AppButton title='Tasdiqlash' onPress={handleSubmit} />
                </View>
              )
            }}
          </FieldArray>
          )
        }}
      </Formik>
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 30,
    marginBottom: 20
  },
  headerTitle: {
    alignSelf: "center",
    fontSize: 22,
  },
  icon: {
    transform: [{ rotate: "180deg" }],
  },
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    marginBottom: 15
  },
  greyedOutText: {
    color: colors.iconGray,
  },
  serviceText: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: FONT_TYPES.MEDIUM
  },
  input: {
    width: "40%",
    marginBottom: 0,
  }
});
