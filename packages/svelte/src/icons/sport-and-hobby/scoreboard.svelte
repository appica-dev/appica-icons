<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 5v2m0 3v1m0 3v1m0 3v1M7 3v2m10-2v2M6 9h1.5a1.5 1.5 0 0 1 0 3m0 0H7m.5 0a1.5 1.5 0 1 1 0 3H6M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm12 3.5v3a1.5 1.5 0 1 0 3 0v-3a1.5 1.5 0 1 0-3 0\"/>";
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
