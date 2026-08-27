<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 12V6.5a2.5 2.5 0 1 1 5 0V12m0-4H5m8-4 3 8 3-8M5 18h14M5 18l2-2m-2 2 2 2m12-2-2 2m2-2-2-2\"/>";
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
