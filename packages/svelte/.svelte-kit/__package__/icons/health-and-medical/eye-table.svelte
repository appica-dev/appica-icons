<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 18h-.011M12 18h-.011M16 18h-.011M4 3h16M5 3v17a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3m-5 4h-4m-1 8h1m4 0h1m-3-4V7\"/>";
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
