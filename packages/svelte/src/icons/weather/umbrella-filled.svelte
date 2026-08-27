<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 3.25a8.75 8.75 0 0 1 8.75 8.749.97.97 0 0 1-.858.965l-.114.007h-6.806v4.86a.972.972 0 0 0 1.938.114l.007-.114a.972.972 0 1 1 1.944 0 2.916 2.916 0 0 1-5.828.171l-.005-.171v-4.86H4.222a.973.973 0 0 1-.965-.859L3.25 12A8.75 8.75 0 0 1 12 3.25\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
