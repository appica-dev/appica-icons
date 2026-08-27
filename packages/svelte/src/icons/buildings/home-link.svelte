<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20.085 11.085 12 3l-9 9h2v7a2 2 0 0 0 2 2h4.5M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 1.807 1.143M21 16l-5 3 5 2m-1 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0-5a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-5 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/>";
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
