<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M19 12h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h5.5M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m1 4h6m-3-3v6\"/>";
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
