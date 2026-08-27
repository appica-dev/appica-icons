<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m4-3h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h5.5m3.5-2h6m0 0-3-3m3 3-3 3\"/>";
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
