<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m17 9 3-3m0 0-3-3m3 3H9a6 6 0 0 0-1 11.918M12 14v6m3-4.5v3a1.5 1.5 0 1 0 3 0v-3a1.5 1.5 0 1 0-3 0\"/>";
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
