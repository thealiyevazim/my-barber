import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BarberProfileEditForm, ClientProfileEditForm } from '~components'
import { useUserType } from '~shared';
import { UserTypesEnum } from '~enums';

export const ProfileEditScreen: React.FC = () => {
  const userType = useUserType();

  return (
    <>
      {userType === UserTypesEnum.Barber ? <BarberProfileEditForm /> : <ClientProfileEditForm />}
    </>
  )
}


const styles = StyleSheet.create({})