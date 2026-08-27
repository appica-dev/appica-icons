<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12.092 15h.01m-3.04-9h7.534a3.05 3.05 0 0 1 1.959.711c.547.46.912 1.096 1.03 1.796l.583 3.464.818 4.865a.99.99 0 0 1-.225.81 1.01 1.01 0 0 1-.77.354H3c0-1.857.745-3.637 2.071-4.95a7.1 7.1 0 0 1 5-2.05h9.9m-10.91 4h.01m6.051 0h.01\"/>";
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
