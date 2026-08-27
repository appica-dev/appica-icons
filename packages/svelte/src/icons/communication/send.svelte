<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10.193 13.807 21 3M10.193 13.807l3.438 6.878a.54.54 0 0 0 .983 0L21 3M10.193 13.807 3.315 10.37a.54.54 0 0 1 0-.983L21 3\"/>";
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
