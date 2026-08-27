<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20.985 12.518a9.001 9.001 0 1 0-8.45 8.466M3.6 9h16.8M3.6 15H15M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.283 12.157M16 19h6m-3-3v6\"/>";
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
