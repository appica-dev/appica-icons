<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15.188 7.75h.01m-9.573 5.313 2.81-2.81a1.285 1.285 0 0 1 1.818 0l3.872 3.872m-1.062-1.062 1.746-1.747a1.28 1.28 0 0 1 1.402-.28c.156.065.298.16.417.28l1.747 1.746M3.5 7.75V5.625A2.125 2.125 0 0 1 5.625 3.5H7.75M3.5 16.25v2.125A2.125 2.125 0 0 0 5.625 20.5H7.75m8.5-17h2.125A2.125 2.125 0 0 1 20.5 5.625V7.75M16.25 20.5h2.125a2.125 2.125 0 0 0 2.125-2.125V16.25\"/>";
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
