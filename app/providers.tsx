'use client';

import { Amplify, ResourcesConfig } from 'aws-amplify';
import config from '../awsConfig';


Amplify.configure(config as ResourcesConfig);

export default function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}