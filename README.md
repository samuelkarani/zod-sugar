Zod but in reverse:
Creates a zod schema from a javascript value

Example:

Runs on Zod v4

Caveats:

1. Please not while Zod itself attempts to mirror Typescript 1-1, this library only handles Javascript values:
   null
   undefined
   boolean
   number
   bigint
   string
   symbol
   array
   object

date
set
map

2. The schema returned is the most generic possible for obvious reasons - we only deal with the values given
