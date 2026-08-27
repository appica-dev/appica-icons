<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 22v-2m3 2v-4m3 4v-6m-2-3.506V12h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h4m-2 0v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v.5\"/>";
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
