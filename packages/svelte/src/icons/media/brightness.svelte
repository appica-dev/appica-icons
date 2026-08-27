<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 21a9 9 0 0 1 0-18m0 18a9 9 0 0 0 0-18m0 18V3m0 6 4.65-4.65M12 14.3l7.37-7.37M12 19.6l8.85-8.85\"/>";
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
