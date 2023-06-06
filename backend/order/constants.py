from enum import Enum
from django.core.cache import cache

class CachePreferences(Enum):
    ITEM_24H_CHANGE= '_24h_change'
    ITEM_24H_LAST_PRICE= '_24h_last_price'
    
    