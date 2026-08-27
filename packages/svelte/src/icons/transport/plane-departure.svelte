<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3.188 21h18.036M14.85 10.238l4.84-1.297a2.005 2.005 0 1 1 1.037 3.87l-14.518 3.89-4.459-5.029 2.903-.777 2.455 1.417 2.903-.778L6.26 5.278 9.164 4.5z\"/>";
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
