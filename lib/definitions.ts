// lib/definitions.ts
export type Term = {
    id: string;
    term: string;
    definition: string;
    analogy: string;
  };
  
  export const raikuTerms: Term[] = [
    {
      id: '1',
      term: 'Deterministic Execution',
      definition: 'A system where the outcome and timing of a transaction are known before it is sent.',
      analogy: 'Like buying a reserved seat at the cinema instead of rushing in to find an empty spot.'
    },
    {
      id: '2',
      term: 'Blockspace',
      definition: 'The digital storage capacity available in a blockchain block to process transactions.',
      analogy: 'Think of it as seats on a train. There are only so many seats per trip.'
    },
    {
      id: '3',
      term: 'Raiku',
      definition: 'A protocol layer that guarantees your transaction gets included in a block without spamming.',
      analogy: 'The VIP Fast Pass for the blockchain.'
    },
    {
      id: '4',
      term: 'Jitter',
      definition: 'The unpredictability of when a transaction will actually process.',
      analogy: 'Like waiting for a package that says "Arriving between 9am and 9pm".'
    },
    {
        id: '5',
        term: 'MEV',
        definition: 'Maximal Extractable Value. When bots reorder transactions to profit from you.',
        analogy: 'Someone cutting in line right before you to buy the last ticket, then selling it to you for double.'
    }
  ];
