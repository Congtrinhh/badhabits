import { defineComponent, provide } from "vue";
const PopupPlugin = defineComponent({
  data() {
    return {
      $popup: {
        showNotification(message: string) {
          // code to show notification popup
          console.log("notifi");
        },
        showConfirmDeletion(message: string, callback: () => void, data: any) {
          // code to show confirm deletion popup
          console.log("confirm deletion");
        },
      },
    };
  },
  created() {
    provide("$popup", this.$popup);
  },
});

export default PopupPlugin;
