<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 21a7 7 0 0 1-7-7c0-6 7-7.692 7-12 0 4.303 7 6 7 12a7 7 0 0 1-7 7m0 0c-2.21 0-4-1.83-4-4 0-1.68.988-2.69 1.988-3.647A66 66 0 0 0 12 11.33L8.5 7.5q4.887 5.252 5.517 5.858C15.011 14.315 16 15.324 16 17c0 2.173-1.79 4-4 4\"/>";
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
