<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M13.305 9.3a3 3 0 0 1 1.405 1.406m-.587 3.413a3.016 3.016 0 0 1-4.121.131m10.042 1.795A9 9 0 0 0 7.957 3.958M5.639 5.635a9 9 0 1 0 12.724 12.73M3.002 3l18 18\"/>";
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
