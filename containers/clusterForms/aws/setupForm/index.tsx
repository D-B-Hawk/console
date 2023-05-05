import React, { FunctionComponent } from 'react';

import { InstallValues } from '../../../../types/redux';
import ControlledAutocomplete from '../../../../components/controlledFields/AutoComplete';
import ControlledTextField from '../../../../components/controlledFields/TextField';
import LearnMore from '../../../../components/learnMore';
import { AWS_REGIONS, EMAIL_REGEX } from '../../../../constants/index';
import { FormFlowProps } from '../../../../types/provision';

const AwsSetupForm: FunctionComponent<FormFlowProps<InstallValues>> = ({ control }) => {
  return (
    <>
      <ControlledTextField
        control={control}
        name="alertsEmail"
        label="Alerts Email"
        onErrorText="Invalid email address."
        required
        rules={{
          required: true,
          pattern: EMAIL_REGEX,
        }}
      />
      <ControlledAutocomplete
        control={control}
        name="cloudRegion"
        label="Cloud region"
        required
        rules={{ required: true }}
        options={AWS_REGIONS}
      />
      <ControlledTextField
        control={control}
        name="domainName"
        label="Cluster domain name"
        required
        rules={{
          required: true,
        }}
      />
      <ControlledTextField
        control={control}
        name="clusterName"
        label="Cluster name"
        rules={{
          maxLength: 25,
          required: true,
        }}
        onErrorText="Maximum 25 characters."
        required
      />
      <LearnMore description="Learn more about" href="" linkTitle="configuring your cluster" />
    </>
  );
};

export default AwsSetupForm;
