<script setup lang="ts">
const props= defineProps({
  name:String,
  url:String,
  id:Number,
  deployType:String,
icon:String,
userId:String
})

const {name,url,id,deployType,icon} = toRefs(props)

</script>

 <template>

           <div  class="p-5 card rounded-md bg-neutral shadow-xl h-full hover:bg-[hsl(var(--nf))] duration-300 ease-linear group">
          <NuxtImg :src="icon" :modifiers="{ grayscale: true, tint: '#00DC82' }" :alt="name"
                   class="w-14 h-14 rounded-md  absolute -top-8 -left-8" />

             <div class="flex flex-col space-y-2 text-start">
               <p  class="text-neutral-content font-bold text-lg">{{ name }}</p>
               <p  class="text-neutral-content text-xs truncate">{{ url }}</p>
               <p  class="text-neutral-content text-xs">{{ id }}</p>
               <p  class="text-neutral-content text-xs">{{ deployType }}</p>
             </div>
             <div class="flex space-x-4 justify-end">
               <a  :key="name" ref="itemRefs" v-motion-fade-visible :delay="100" :href="url"
              target="_blank" class="  flex">
      <Icon name="uil:external-link-alt" size="20"
                      class="text-neutral-content " />
            </a>

                    <Icon name="uil:trash-alt" size="20"
                     class="text-neutral-content " />
             </div>
           </div>

 </template>
