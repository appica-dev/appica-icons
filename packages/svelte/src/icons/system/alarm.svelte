<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 9.75v3.375h2.258M6.355 3 3.25 5.25M17.645 3l3.105 2.25M4.097 13.125a7.85 7.85 0 0 0 2.315 5.569A7.9 7.9 0 0 0 12 21a7.93 7.93 0 0 0 5.588-2.306 7.87 7.87 0 0 0 2.315-5.569 7.85 7.85 0 0 0-2.315-5.568A7.9 7.9 0 0 0 12 5.25a7.93 7.93 0 0 0-5.588 2.307 7.87 7.87 0 0 0-2.315 5.568\"/>";
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
