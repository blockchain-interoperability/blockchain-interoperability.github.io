#%%
import pandas as pd
import itertools
from collections import Counter

def dollar_to_num(dollar):
    if dollar == 'N/A': return -1
    else:
        am = dollar.replace('$',' ').replace(',','').replace(' ','')
        if not am: return -1
        return int(am)

def split_tags(tagstr):
    if tagstr == 'N/A': return ['']
    else: return tagstr.split('/')

data = pd.read_csv(
    'Blockchain Hacks.csv',
    index_col=0,
    converters={
        'Date': pd.to_datetime,
        'Amount Stolen (USD)': dollar_to_num,
        'Tags': split_tags,
        'NeedDiscussion': lambda x: not bool(x)
    }
)

data = data.sort_values(by='Date')
data = data[~data.NeedDiscussion]


# %%

all_tags = list(itertools.chain(*data.Tags.values.tolist()))

tags_count = sorted(Counter(all_tags).items(),key=lambda x: x[1],reverse=True)


# %%

amounts = data[data['Amount Stolen (USD)'] > 0][
    [
        'Date',
        'Exchange',
        'Amount Stolen (USD)',
        'Cause of Hack',
        'Notes',
        'Source',
        'Tags'
    ]
]
amounts.columns = [
    'date',
    'name',
    'amount',
    'cause',
    'notes',
    'ref',
    'tags'
]

cumul = 0
amount_over_time = []
for amount in amounts.amount.values:
    
    cumul += amount
    amount_over_time.append(cumul)

amounts['amountOverTime'] = amount_over_time


amounts.to_json('attackData.json',date_unit='ms',orient='records')

# for timestamp in pd.timedelta_range(amounts.Date.min(),amounts.Date.max(),freq='30D'):
#     break
# %%
