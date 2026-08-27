<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m4-1.512V12h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h4.525M15 19l2 2 4-4\"/>";
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
