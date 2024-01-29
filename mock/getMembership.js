export default {
  hasError: false,
  responsePayload: {
    data: [
      {
        type: '[Membership] enroll',
        id: '1234567890',
        meta: {
          created: {
            at: '2024-01-20T10:55:50.300Z',
            by: {
              system: 'UNKNOWN',
              organization: '-',
              sign: '-',
              username: '-',
              officeId: '-',
            },
            via: {
              execution: 'ONLINE',
              online: {
                channel: 'WEBSITE',
                location: {},
              },
            },
          },
          version: {
            current: 1,
          },
        },
        subType: 'INDIVIDUAL',
        membershipId: '-',
        status: {
          main: 'OPEN',
          effectiveAt: '2024-01-20',
          sub: {
            accountIdentifier: {
              activity: 'NOT_ACTIVATED',
              merge: 'NEUTRAL',
              fraudSuspicion: 'NEUTRAL',
              billing: 'ACTIVE',
              completeness: {
                percentage: 90,
                missingFields: ['individual.identity.documents[0]'],
              },
              accountLoginStatus: 'UNLOCKED',
            },
            characteristicIdentifier: {
              memberLifeCycle: 'ADULT',
              civil: {
                subType: 'NOT_SPECIFIED',
              },
              lifeCycle: {
                isDeceased: false,
                ageGroup: 'ADULT',
              },
            },
          },
        },
        enrolmentSource: 'WEBSITE',
        enrolmentDate: '2024-01-20',
        contact: {
          emails: [
            {
              category: 'PERSONAL',
              address: 'john.doe@example.dummy',
              contactValidity: {
                isMain: true,
                isValid: true,
                isConfirmed: true,
              },
            },
          ],
          addresses: [
            {
              category: 'PERSONAL',
              lines: [''],
              countryCode: 'IN',
              contactValidity: {
                isMain: true,
                isValid: true,
                isConfirmed: true,
              },
            },
          ],
          phones: [
            {
              category: 'PERSONAL',
              deviceType: 'MOBILE',
              countryCallingCode: '91',
              number: '1111111111',
              contactValidity: {
                isMain: true,
                isValid: true,
                isConfirmed: true,
              },
            },
          ],
        },
        mainTier: {
          tierType: 'MAIN',
          level: 'BAS',
          code: 'STDBAS',
          label: 'Standard Base',
          validityStartDate: '2024-01-19T18:30:00.000Z',
          airlinePriorityCode: '1',
          allianceTier: {
            tierCode: 'B',
            ffpTierCode: 'Flying Returns Member',
          },
        },
        loyaltyAward: [
          {
            amount: '0',
            code: 'RP',
            description: 'Redeemable Points',
            category: 'STANDARD',
          },
        ],
        individual: {
          identity: {
            name: {
              romanized: {
                firstName: 'John Doe',
                lastName: 'Doe',
                title: 'MR',
              },
            },
            nationalities: ['IN'],
            birthDate: '2000-01-01',
            gender: 'MALE',
          },
          consents: [
            {
              for: 'MARKETING OFFERS',
              status: 'GRANTED',
              providedAt: '2024-01-20T10:55:50.341Z',
              to: 'AI',
              via: 'SMS',
            },
            {
              for: 'MARKETING OFFERS',
              status: 'GRANTED',
              providedAt: '2024-01-20T10:55:50.341Z',
              to: 'PARTNER',
              via: 'EMAIL',
            },
            {
              for: 'MARKETING OFFERS',
              status: 'GRANTED',
              providedAt: '2024-01-20T10:55:50.341Z',
              to: 'FFP_DEPARTMENT',
              via: 'SMS',
            },
            {
              for: 'MARKETING OFFERS',
              status: 'GRANTED',
              providedAt: '2024-01-20T10:55:50.341Z',
              to: 'FFP_DEPARTMENT',
              via: 'EMAIL',
            },
            {
              for: 'MARKETING OFFERS',
              status: 'GRANTED',
              providedAt: '2024-01-20T10:55:50.341Z',
              to: 'AI',
              via: 'EMAIL',
            },
            {
              for: 'ACCOUNT INFO',
              status: 'GRANTED',
              providedAt: '2024-01-20T10:55:50.341Z',
              to: 'PARTNER',
              via: 'EMAIL',
            },
          ],
          preferences: [
            {
              category: 'REFERENTIAL_DATA',
              subCategory: 'CURRENCY',
              value: 'INR',
            },
          ],
          fulfillmentDetail: {
            nameOnCard: 'John Doe',
            letterOfSalutation: 'Dear MR John Doe',
            disableFulfillments: false,
          },
        },
      },
    ],
    meta: {
      count: 1,
      page: {
        offset: 0,
        count: 1,
        limit: 20,
      },
    },
    warnings: [],
    errors: [],
  },
};
