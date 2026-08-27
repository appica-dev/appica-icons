<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m21 12-9-9-9 9h2v7a2 2 0 0 0 2 2h4.7M9 21v-6a2 2 0 0 1 2-2h2m7.2 7.2L22 22m-7-4a3 3 0 1 0 6 0 3 3 0 0 0-6 0\"/>";
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
