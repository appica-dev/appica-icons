<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14.002 10h3v3m-3 1h-7v-4h3m10.042 6.045A9 9 0 0 0 7.957 3.958M5.639 5.635a9 9 0 1 0 12.724 12.73M3.002 3l18 18\"/>";
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
