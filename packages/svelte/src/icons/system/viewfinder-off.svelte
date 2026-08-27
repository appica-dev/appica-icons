<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.65 5.623a9 9 0 1 0 12.71 12.745m1.683-2.328A9.001 9.001 0 0 0 7.95 3.96M12 3v4m0 14v-3m-9-6h4m14 0h-3m-6 0v.01M3 3l18 18\"/>";
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
