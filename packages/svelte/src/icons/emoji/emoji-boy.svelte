<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17 4.5a9 9 0 0 1 3.863 5.89 2.5 2.5 0 0 1-.29 4.36 9 9 0 0 1-17.137 0 2.5 2.5 0 0 1-.29-4.36 9 9 0 0 1 3.746-5.81M9.5 16a3.5 3.5 0 0 0 5 0m-6-14C10 3 11 5.5 11 7m1.5-5c1.5 2 2 3.5 2 5M9 12h.01M15 12h.01\"/>";
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
