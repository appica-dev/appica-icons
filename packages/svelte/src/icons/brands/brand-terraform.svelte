<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 9 5.03 3.184A1.35 1.35 0 0 0 3 4.35v4.054a1 1 0 0 0 .524.88L15 15.5l5.504-3.21a1 1 0 0 0 .496-.864V7.85a1.35 1.35 0 0 0-2.03-1.166zm0 0v10.65a1.35 1.35 0 0 1-2.03 1.166l-3.474-2.027A1 1 0 0 1 9 17.926V6\"/>";
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
