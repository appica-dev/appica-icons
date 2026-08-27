<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12.5 21H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h10q.362.002.683.12M8 11V7a4 4 0 0 1 8 0v4m3 7v.01M11 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0m10.121 4.121a3 3 0 1 0-4.242 0Q17.506 20.749 19 22q1.577-1.335 2.121-1.879\"/>";
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
