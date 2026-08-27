<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14.002 9.75a3 3 0 0 0-.712-.466m-3.41.596a2.993 2.993 0 0 0-.041 4.197 3.016 3.016 0 0 0 4.163.173m6.042 1.795A9 9 0 0 0 7.957 3.958M5.639 5.635a9 9 0 1 0 12.724 12.73M3.002 3l18 18\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
