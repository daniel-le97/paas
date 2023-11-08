
import { reactive } from 'vue';
interface Application {
  name: string;
  id: number;
  deployType: string;
  url: string;
  icon: string;
  userId: string;
}
export const appstate = reactive({
  applications: [],
filteredApplications: [],
searchQuery:''
});
