<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 21a9 9 0 0 1 0-18m0 18a9 9 0 0 0 0-18m0 18V3m-.5 0a11.2 11.2 0 0 0 0 18m1-18a11.2 11.2 0 0 1 0 18\"/>";
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
