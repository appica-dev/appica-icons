<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 18 9.8 5.2M11 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 9l5.5 5.5a5 5 0 0 1 7 0L21 9A12 12 0 0 0 3 9\"/>";
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
