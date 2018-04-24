import { GroupTableEntry } from './group-table';

export interface GroupTableComparator {

    compare(a: GroupTableEntry, b: GroupTableEntry): number

    getIdentityToken(entry: GroupTableEntry): any

}
