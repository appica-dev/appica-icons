<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 3a7 7 0 0 1 7 7v4m0 0-3-3m3 3 3-3M3 12.5l5 3V21m-5-8.5 5-3 5 3V18l-5 3m-5-8.5V18l5 3m0-5.455 5-3.03\"/>";
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
