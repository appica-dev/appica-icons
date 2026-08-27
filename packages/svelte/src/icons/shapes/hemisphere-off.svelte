<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6.588 6.603C4.41 7.15 3 8.02 3 9m0 0c0 1.657 4.03 3 9 3M3 9a9 9 0 0 0 13.677 7.69m-.957-4.957C18.834 11.26 21 10.215 21 9m0 0c0-1.657-4.03-3-9-3q-.995 0-1.93.07M21 9a8.97 8.97 0 0 1-2.158 5.847M3 3l18 18\"/>";
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
